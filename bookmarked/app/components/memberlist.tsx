
import { faPencil, faRightFromBracket, faTrash, faUserEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Membercontrol from "./membercontrol";

export default async function Memberlist() {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra table-xs">
        {/* head */}
        <thead>
          <tr className="text-sm">
            <th></th>
            <th></th>
            <th className="font-inter text-xs">Name</th>
            <th className="font-inter text-xs">Username</th>
            <th className="font-inter text-xs">Email</th>
            <th className="font-inter text-xs">DOB</th>
            <th className="font-inter text-xs">Administrator</th>
            <th className="font-inter text-xs">XP</th>
            <th className="font-inter text-xs"></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr>
            <td>-</td>
            <td>1</td>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>Quality Control Specialist</td>
            <td>Blue</td>
            <td>4</td>
            <td>
              <Membercontrol/>
            </td>
          </tr>
          {/* row 2 */}
          <tr>
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr>
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
