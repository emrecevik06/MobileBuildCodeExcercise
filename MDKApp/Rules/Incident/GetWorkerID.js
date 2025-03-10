export default function GetWorkerID(context) {
    let workerID = context.getGlobalDefinition('/MDKApp/Globals/Application/WorkerID.global').getValue();
    alert("Hello World:" + workerID)

    let queryOptions = `$filter=serviceWorker_ID eq ${workerID}`;

    return queryOptions;
}
