import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ManageProgress({ showUser = true }: { showUser?: boolean }) {
    return (
        <dialog id="manage_progress" className="modal">
            <div className="modal-box w-xl">
                <h3 className="font-bold text-lg mb-2 my-0">
                    Progress of TestyMcTestFace12345
                </h3>
                <div className="divider my-0"></div>


                <div className="grid grid-cols-1 gap-2">
                    <fieldset className="fieldset w-full">
                        <legend className="fieldset-legend">
                            XP
                        </legend>
                        <div className="flex gap-x-2 w-full items-center">
                            <input
                                type="number"
                                name="xp"
                                className="input focus:outline-none w-32 focus:border-none focus:ring-1 transition-all focus:ring-orange-700"
                                defaultValue={0}
                            />
                            <div className="grow">                            <p>
                                (Lvl. 20)
                            </p></div>


                        </div>
                        <button className="btn btn-xs btn-success rounded-sm">
                            Update XP
                        </button>

                    </fieldset>
                    <div className="divider my-0"></div>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                            Reviews Written
                        </legend>
                        <div className="overflow-y-auto h-38">
                            <table className="table table-xs">
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>Book</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <tr key={i} className="py-1">
                                            <td>01/04/2000 22:00</td>
                                            <td>Littel, Schaden and Vandervort</td>
                                            <td><button className="btn btn-error rounded-sm btn-xs">
                                                {" "}
                                                <FontAwesomeIcon icon={faTrash} className="h-3.5 w-3.5" />
                                            </button></td>


                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">
                            Books Read
                        </legend>
                        <div className="overflow-y-auto h-38">
                            <table className="table table-xs">
                                <thead>
                                    <tr>
                                        <th>Time</th>
                                        <th>Book</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Array.from({ length: 12 }).map((_, i) => (
                                        <tr key={i} className="py-1">
                                            <td>01/04/2000 22:00</td>
                                            <td>Littel, Schaden and Vandervort</td>
                                            <td>


                                                <div className="tooltip tooltip-left  tooltip-error" data-tip="Click again to confirm">
                                                    <button className="btn btn-error rounded-sm btn-xs">
                                                        {" "}
                                                        <FontAwesomeIcon icon={faTrash} className="h-3.5 w-3.5" />
                                                    </button>
                                                </div></td>


                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </fieldset>
                </div>
                <div className="modal-action">
                    <div className="flex gap-2">
                        <form method="dialog">
                            <button className="btn btn-sm rounded-sm">
                                Close
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </dialog>
    );
}
