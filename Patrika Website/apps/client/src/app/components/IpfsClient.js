import {create} from "ipfs-http-client"

const IPFSclient = create('https://ipfs.infura.io:5001/api/v0');

export default IPFSclient;