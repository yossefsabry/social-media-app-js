import { handleClickDeleteButton, handleAddingComment, showUserInfo, handleClickCard , handleClickEditButton} from "../index.ts";
import { CustomWindow } from "../interface.ts";

/**
 * @param {object} item - the current card item full object
 * @param {boolean} condition - the condition for show the delete and edit buttons
 * @param {number} idUpdate - the id for the card
 * @param {number} id - the id for the card
 * @param {string} title - the title for the card
 * @param {HTMLElementEventMap} tags - for html with all tags
 * @returns {object} - returns the card for the html tree
 */
function templateCard(item: any, condition: boolean, idUpdate: number, id: number, title: string, tags: any): string {
  // global defeind the method to can read by html
  const customWindow = window as CustomWindow;

  customWindow.showUserInfo = showUserInfo;
  customWindow.handleClickCard = handleClickCard;
  customWindow.handleAddingComment = handleAddingComment;
  customWindow.handleClickDeleteButton = handleClickDeleteButton;
  customWindow.handleClickEditButton = handleClickEditButton;

  const card = `
<div class="card" >
    <div class="card-header">
        ${typeof item.author.profile_image == "string" ?
      `<img src="${item.author.profile_image}" alt="avatar" class="img-fluid my-1" style="width: 40px; height: 40px; border-radius: 50% !important;" />`
      :
      `<img src="images/icons8-user-48.png" alt="avatar" class="img-fluid my-1" style="width: 40px; border-radius: 50% !important;" />`
    }                     
        <span onclick="showUserInfo('${encodeURIComponent(JSON.stringify(item),
    )}')" style="cursor: pointer;"><strong>${item.author.username
    }</strong>
        </span>
        ${condition
      ? `<button class="btn btn-danger mx-2" style="float: right;" onclick={handleClickDeleteButton('${idUpdate}')}>delete</button>`
      : ""
    }
        ${condition ? `<button class="btn btn-primary" style="float: right;" onclick="handleClickEditButton('${encodeURIComponent(JSON.stringify(item),)}')">edit</button>`
      : ""}
    </div>
    <div class="card-body" onclick=handleClickCard(${id})>
        <img src=${item.image} alt="image post" style="width: 100%;height: 500px;padding-bottom: 3px;" />
        <h6 style="color: #777;">${item.created_at}</h6>
        <h4>${title}</h4>
        <p>${item.body}</p>
        <hr />
        <div class="d-flex gap-3 justify-content-start align-items-center">
        <a href="#"> <span>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16"> <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
        </svg> </span>
            (${item.comments_count})Commits
        </a>
            <span style="display: flex; gap: 5px;" class="category">
                ${tags}
            </span>
        </div>
    </div>
</div>
  `;
  return card;
}
export default templateCard;
