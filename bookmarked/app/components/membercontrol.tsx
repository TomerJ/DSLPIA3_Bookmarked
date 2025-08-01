"use client";
import { faPencil, faRightFromBracket, faTrash, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default  function Membercontrol() {
    return (
        <div className="flex gap-x-1">
            <div className="tooltip tooltip-bottom" data-tip="Edit Profile">
                <button className="btn btn-secondary rounded-sm btn-xs"> <FontAwesomeIcon
                    icon={faUserEdit}
                    className="h-3.5 w-3.5"
                /></button>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Edit User Information">
                <button className="btn btn-warning rounded-sm btn-xs" onClick={() => {
                    (document.getElementById('edit_user') as HTMLDialogElement)?.showModal();
                }}> <FontAwesomeIcon
                        icon={faPencil}
                        className="h-2.5 w-2.5"
                    /></button>
                <dialog id="edit_user" className="modal">
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Editing Information of TestyMcTestFace12345</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p>
                        <div className="modal-action">
                            <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                            </form>
                        </div>
                    </div>
                </dialog>
            </div>
            <div className="tooltip tooltip-bottom" data-tip="Delete User">
                <button className="btn btn-error rounded-sm btn-xs"> <FontAwesomeIcon
                    icon={faTrash}
                    className="h-2.5 w-2.5"
                /></button>
            </div>
        </div>
    );
}
