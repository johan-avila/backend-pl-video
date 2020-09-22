function buildMessage(entry, action ){
    if (action === "list"){

        return `${entry}s ${action}ed`
    }else{
        return `${entry} ${action}d`
    }
}

module.exports = buildMessage