import * as React from 'react';
export interface DialogProps {
    isOpen: boolean;
    hasCloseBtn?: boolean;
    onClose?: () => void;
    children: React.ReactNode;
    classes?: {
        modal: string;
    };
}
declare const Dialog: React.FC<DialogProps>;
export default Dialog;
