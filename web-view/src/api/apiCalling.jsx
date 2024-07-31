import axios from "axios";
import {BASE_URI} from "../data/uri.jsx";

export async function getData(path, headers) {
    const uri = BASE_URI + path;
    try {
        return await axios.get(uri, {
            headers: {
                ContentType: "application/json",
                ...headers
            }
        });
    } catch (error) {
        throw error;
    }
}

export async function postData(path, data, headers) {
    const uri = BASE_URI + path;
    try {
        return await axios.post(uri, data, {
            headers: {
                ContentType: "application/json",
                ...headers
            }
        });
    } catch (error) {
        throw error;
    }
}

export async function deleteData(path, headers) {
    const uri = BASE_URI + path;
    try {
        return await axios.delete(uri, {
            headers: {
                ContentType: "application/json",
                ...headers
            }
        });
    } catch (error) {
        throw error;
    }
}

export async function putData(path, data, headers) {
    const uri = BASE_URI + path;
    try {
        return await axios.put(uri, data, {
            headers: {
                ContentType: "application/json",
                ...headers
            }
        });
    } catch (error) {
        throw error;
    }
}

