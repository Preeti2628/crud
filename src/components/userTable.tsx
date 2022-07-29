import React, { useState } from "react";
import { IUser } from "./interface";
import {
  DetailsList,
  buildColumns,
  IColumn,
} from "@fluentui/react/lib/DetailsList";
import {
  Label,
  IconButton,
  ActionButton,
  IIconProps,
  initializeIcons,
  Dialog,
  PrimaryButton,
  DialogType,
  Icon,
} from "@fluentui/react";
import { useNavigate } from "react-router-dom";
import { mergeStyleSets } from "@fluentui/react/lib/Styling";
import * as ReactIcons from "@fluentui/react-icons-mdl2";

const classNames = mergeStyleSets({
  fileIconHeaderIcon: {
    padding: 0,
    fontSize: "16px",
  },
  fileIconCell: {
    textAlign: "center",
    selectors: {
      "&:before": {
        content: ".",
        display: "inline-block",
        verticalAlign: "middle",
        height: "100%",
        width: "0px",
        visibility: "hidden",
      },
    },
  },
  fileIconImg: {
    verticalAlign: "middle",
    maxHeight: "16px",
    maxWidth: "16px",
  },
  selectionDetails: {
    marginBottom: "20px",
  },
});

const controlStyles = {
  root: {
    margin: "0 30px 20px 0",
    maxWidth: "300px",
  },
};

interface IProps {
  users: Array<IUser>;
  onEdit: (user: IUser) => void;
  onDelete: (user: IUser) => void;
}

export interface IDetailsListDocumentsExampleState {
  columns: IColumn[];
  items: IDocument[];
  selectionDetails: string;
  isModalSelection: boolean;
  isCompactMode: boolean;
  announcedMessage?: string;
}

initializeIcons();

const deleteIcon: IIconProps = { iconName: "delete" };
const editIcon: IIconProps = { iconName: "edit" };



export interface IDocument {
  id: number;
  name: string;
  designation: string;
  skills: string;
  city: string;
}
// const onDeleteUser = (currentUser: IUser) => {
//   setUsers(props.users.filter(value => value.id !== currentUser.id));
// };



const UserTable: React.FunctionComponent<IProps> = (props) => {
  let navigate = useNavigate();
  const [users, setUsers] = useState(props);
  const columns: IColumn[] = [
    {
      key: "column1",
      name: "File Type",
      ariaLabel: "Column operations for File type, Press to sort on File type",
      iconName: "Page",
      isIconOnly: true,
      fieldName: "Name",
      minWidth: 16,
      maxWidth: 16,
    },
    {
      key: "column2",
      name: "Name",
      fieldName: "name",
      minWidth: 200,
      maxWidth: 280,
      isRowHeader: true,
      isResizable: true,
      isSorted: true,
      isSortedDescending: false,
      sortAscendingAriaLabel: "Sorted A to Z",
      sortDescendingAriaLabel: "Sorted Z to A",
      data: "string",
      isPadded: true,
    },
    {
      key: "column3",
      name: "Designation",
      fieldName: "designation",
      minWidth: 200,
      maxWidth: 280,
      isResizable: true,
      data: "string",
      //   onRender: (item: IDocument) => {
      //     return <span>{item.dateModified}</span>;
      //   },
      isPadded: true,
    },
    {
      key: "column4",
      name: "IT , Skills",
      fieldName: "skills",
      minWidth: 200,
      maxWidth: 290,
      isResizable: true,
      isCollapsible: true,
      data: "string",
      //   onRender: (item: IDocument) => {
      //     return <span>{item.modifiedBy}</span>;
      //   },
      isPadded: true,
    },
    {
      key: "column5",
      name: "City",
      fieldName: "city",
      minWidth: 200,
      maxWidth: 200,
      isResizable: true,
      isCollapsible: true,
      data: "string",
      //   onRender: (item: IDocument) => {
      //     return <span>{item.fileSize}</span>;
      //   },
    },
    {
      key: "column6",
      name: "Actions",
      fieldName: "actions",
      minWidth: 70,
      maxWidth: 90,
      isResizable: true,
      isCollapsible: true,
      onRender: (item: IDocument) => {
        // return <Icon aria-label={Icon.EditIcon.replace('Icon', '')}/>;
        // return <Icon aria-label={Icon.DeleteIcon.replace('Icon', '')}/>;
        return (
          <>
            <ActionButton iconProps={editIcon} allowDisabledFocus>
              Edit
            </ActionButton>
            <ActionButton
              iconProps={deleteIcon}
              allowDisabledFocus
              onClick={onDeleteUser}
            >
              Delete
            </ActionButton>
          </>
        );
      },
    },
  ];


  const onDeleteUser = () => {
    // setUsers(props.user.filter(i => i.id !== currentUser.id));
    console.log("props users",props.users);
  };

  return (
    <div className="user-table">
      <h1>View users</h1>
      <PrimaryButton text="Add" onClick={() => navigate("/add")} />
      <DetailsList items={props.users} columns={columns} setKey="set" />
      <PrimaryButton text="Edit" onClick={() => navigate("/edit")} />
      <PrimaryButton text="Delete" />
      {/* <td>
                  <button onClick={() => props.onEdit(i)}>edit</button>
                  <button onClick={() => props.onDelete(i)}>delete</button>
                </td> */}
    </div>
  );
};
export default UserTable;
