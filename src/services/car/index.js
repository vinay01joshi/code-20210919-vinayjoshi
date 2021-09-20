import { doRequest } from "../../utils/request";
import * as endpoints from "../endpoints";

const getAllCarMake = () => {
    return doRequest({
        method: "GET",
        url: endpoints.GET_ALL_VEHICLE_MAKE
    });
}