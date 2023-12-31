import React from "react";
import NewContextMenu from "../NewContextMenu";
import { withRouter } from "../../routers/utils";

const FolderItem = (props) => {
  return (
    <div
      className={
        props.id !== props.selected
          ? "elem__folders noSelect"
          : "elem__folders active__folder noSelect"
      }
      onClick={() => props.folderClick(props.id, props)}
      onContextMenu={props.selectContext}
      onTouchStart={props.onTouchStart}
      onTouchEnd={props.onTouchEnd}
      onTouchMove={props.onTouchMove}
    >
      <div
        className="context__menu--wrapper"
        onClick={props.clickStopPropagation}
      >
        <NewContextMenu
          gridMode={true}
          folderMode={true}
          quickItemMode={props.parent !== "/"}
          contextSelected={props.state.contextSelected}
          closeContext={props.closeContext}
          downloadFile={props.downloadFile}
          file={props}
          changeEditNameMode={props.changeEditNameMode}
          closeEditNameMode={props.closeEditNameMode}
          changeDeleteMode={props.changeDeleteMode}
          startMovingFile={props.startMoveFolder}
        />
      </div>
      <div
        class={
          props.id !== props.selected
            ? "folders__image"
            : "folders__image folder__selected"
        }
      >
        <i class="fas fa-folder" aria-hidden={true}></i>
      </div>
      <div class="folder__info">
        <p>{props.name}</p>
        <ul>
          {/* <li>16 files</li>
					<li class="spacer__folder">•</li> */}
          <li>Amazon S3</li>
        </ul>
      </div>
    </div>
  );
};

export default withRouter(FolderItem);
