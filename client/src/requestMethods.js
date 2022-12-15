import axios from "axios";

const BASE_URL = "http://localhost:5000/api";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWEzNWU2ZmI2MjM3NWVlYzBiNmQyMiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3MTA1MDgxMiwiZXhwIjoxNjcxMzEwMDEyfQ.cdk-_d0P1AjT3SX0UlWMKOmANQ74oPUFhtXaJvllpv8";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`},
})