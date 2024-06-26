import axios, { AxiosError } from "axios";
import { loaderHandler, createAlert, showUserInfo , getRequest} from "../index.ts";
import { url } from "../storeData.ts";
import { AlertType } from "../interface.ts";

/**
 * for handle the deleting button for the post that user made
 * @param {number} e - the id for the post that gone delete
 * @param {boolean} refresh - for refresh the page userInfo (profile)
 * @throws {error} - error when making reqeust for deleting the post
 */
const handleClickDeleteButton = (e: number, refresh?: boolean) => {
  loaderHandler(true);
  const token: string | null = localStorage.getItem("token");
  const headers: { authorization: string } = {
    authorization: `Bearer ${token}`,
  };
  axios.delete(`${url}/posts/${e}`, { headers: headers })
    .then(() => { 
      createAlert("deleting the post successfuly ", AlertType.success);
      // FIX handle the fix click
      if (refresh) {
        showUserInfo();
      }
      getRequest(true);
      loaderHandler(false);
    })
    .catch((e: AxiosError) => {
      console.log(e);
      createAlert("error happend in deleting: " + e, AlertType.danger);
      loaderHandler(false);
    });
};

export default handleClickDeleteButton;
