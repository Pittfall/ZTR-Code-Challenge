import { get, post } from '../Axios/ApiInvoke';

export const GetMachines = () => {
    return get('machine/');
}

export const GetMachine = (machineId) => {
    return get('machine/' + machineId);
}

export const AddNewMachine = (machineData) => {
    return post('machine/', machineData);
}