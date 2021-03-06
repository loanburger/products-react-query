import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TestIds } from 'src/utils';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setDeleteModalOpen } from 'src/actions';
import { getDeleteModalOpen, getSelectedProducts } from 'src/selectors';
import { useMutation, useQueryClient } from 'react-query';
import { deleteProduct } from 'src/api';
import { IProductResponse } from 'src/models';

const style: SxProps<Theme> = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#000',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const DeletePromptModal = () => {
  const dispatch = useDispatch();
  const queryClient = useQueryClient();
  const mutation = useMutation(deleteProduct);
  const isOpen = useSelector(getDeleteModalOpen);
  const selectedProducts = useSelector(getSelectedProducts);

  const onDeleteProducts = async () => {
    const { id } = selectedProducts[0];

    const { isSuccessful, error }: IProductResponse =
      await mutation.mutateAsync(id);

    queryClient.invalidateQueries('products');

    isSuccessful ? dispatch(setDeleteModalOpen(false)) : alert(error?.message);
  };

  const handleClose = () => {
    dispatch(setDeleteModalOpen(false));
  };

  return (
    <div>
      <Modal
        open={isOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} data-testid={TestIds.productDeleteModal}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete products?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Are you sure you wish to delete the selected products?
          </Typography>
          <Button onClick={onDeleteProducts}>Delete</Button>
          <Button onClick={handleClose}>Close</Button>
        </Box>
      </Modal>
    </div>
  );
};

export default DeletePromptModal;
