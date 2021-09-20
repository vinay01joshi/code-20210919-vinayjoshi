import axios from 'axios';
import {
    getMatrixToken,
    getMatrixStoreId,
    getMatrixUserId,
} from 'utils/cookie';
/**
 *
 * @param {*} url
 * @param {*} method
 * @param {*} dataOrParams? pass param with get method its automatically take as parameter,
 * pass param with post method its automatically take as body
 */
let source;
source = axios.CancelToken.source();

export async function doRequest(
    url,
    method = 'get',
    dataOrParams,
    contentType = '',
    isCancelToken = false,
    responseType = ''
) {
    const headers = {
        Accept: 'application/json',
        'Content-Type': contentType ? contentType : 'application/json',
        Authorization: `Bearer ${getMatrixToken()}`,
        storeId: getMatrixStoreId(),
        ueserId: getMatrixUserId(),
    };
    const params = method === 'get' ? dataOrParams : {};
    const data = method !== 'get' ? dataOrParams : undefined;

    /** cancel token is use for cancel previous request , send latest request
     * handling for frequent request on search
     */
    if (source && isCancelToken) {
        source.cancel();
        source = axios.CancelToken.source();
    }

    return await axios({
        url,
        method,
        data,
        timeout: 30 * 1 * 1000, //timeout
        params,
        headers,
        responseType,
        cancelToken: source?.token,
    });
}
