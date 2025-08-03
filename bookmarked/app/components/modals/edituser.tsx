export default function EditUser({ showUser = true }: { showUser?: boolean }) {
    return (
        <dialog id="edit_user" className="modal">
            <div className="modal-box w-xl">
                <h3 className="font-bold text-lg mb-2 my-0">
                    Editing Information of TestyMcTestFace12345
                </h3>
                <div className="divider my-0"></div>
                <form>
                    <div className="grid grid-cols-1 gap-2">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">
                                Full Name
                            </legend>
                            <input
                                type="text"
                                name="username"
                                className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                placeholder="Type here"
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">
                                Username
                            </legend>
                            <input
                                type="text"
                                name="username"
                                className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                placeholder="Type here"
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">
                                Email Address
                            </legend>
                            <input
                                type="text"
                                name="username"
                                className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                placeholder="Type here"
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">
                                Date of Birth
                            </legend>
                            <input
                                type="text"
                                name="username"
                                className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                placeholder="Type here"
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">
                                XP Level
                            </legend>
                            <input
                                type="text"
                                name="username"
                                className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                placeholder="Type here"
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Avatar</legend>
                            <input
                                type="text"
                                name="username"
                                className="input w-full focus:outline-none focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                placeholder="Type here"
                            />
                        </fieldset>
                    </div>
                </form>
                <div className="modal-action">
                    <div className="flex gap-2">
                        <form method="dialog">
                            <button className="btn btn-sm btn-success rounded-sm">
                                Update Profile
                            </button>
                        </form>
                        <form method="dialog">
                            <button className="btn btn-sm rounded-sm">
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </dialog>
    );
}
