import { loader } from './funcForRecords.js';


async function start() {
    const loaderEl = loader();
    document.body.append(loaderEl)
    const recordsTable = await import('./recordsTable.js');
    recordsTable.renderRecords();
    loaderEl.remove()
}

start();





