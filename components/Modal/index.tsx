import Modal from 'react-modal';
import { Button } from '../ButtonWithArrow/ButtonWithArrow.style';

export const IncModal = ({
    show,
    onHide,
    content }: {show: boolean; onHide: () => void; title: string; content: any}) => {

  return (
      <Modal
        isOpen={show}
        style={{content: {inset: 0}}}
        onRequestClose={onHide}
        contentLabel="Example Modal"
      >
        <Button style={{right: 0,
            top: '55px',
            position: 'absolute',
            padding: '10px',
        }} onClick={onHide}>close</Button>
        {content}
      </Modal>
  );
}
