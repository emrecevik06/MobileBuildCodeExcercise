export default function GetWorkerID(context) {
    let workerID = context.getGlobalDefinition('/MDKApp/Globals/Application/WorkerID.global').getValue();
    let queryOptions = `$filter=serviceWorker_ID eq ${workerID}`;

    return queryOptions;
}
