import React, { useState } from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ResultItem = ({ result }) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="result-item" onClick={openModal}>
            <h2>{result.name || 'Unnamed Place'}</h2>
            <p>Distance: {result.dist || 0} meters</p>
            {/* Other details */}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                className="modal"
            >
                <h2>{result.name || 'Unnamed Place'}</h2>
                <p>Distance: {result.dist || 0} meters</p>
                <p>Rate: {result.rate}</p>
                <p>Kinds: {result.kinds}</p>
                <button onClick={closeModal}>Close</button>
            </Modal>
        </div>
    );
};

export default ResultItem;
