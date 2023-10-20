import React, {FC, useEffect} from 'react';
import cl from './Modal.module.css';
import closeBtn from '../../assets/close.svg';

type Props = {
    visible?: boolean;
    modalText?: string;
    setModalVisibility: (arg0: boolean) => void;
    children?: React.ReactNode;
    messageType?: string;
};

const MyModal: FC<Props> = (props: Props) => {

    const {
        setModalVisibility,
        visible,
        children,
    } = props;

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setModalVisibility(false);
            }
        };

        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div
            onClick={() => setModalVisibility(false)}
        >
            {visible && (
                <div className={cl.background}>
                    <div
                        className={cl.container}
                        onClick={(e) => {
                            e.stopPropagation();
                        }}
                    >
                        <img src={closeBtn} className={cl.closeBtn} onClick={() => {setModalVisibility(false)}}/>
                        {children}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyModal;
