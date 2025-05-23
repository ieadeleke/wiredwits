
export function errorHandler(error: any) {
    const { response } = error
    if (response && response.data) {
        const { data, statusCode: status } = response
        const message = data.message ?? data.statusMessage
        if (message) {
            return {
                statusCode: status as number,
                message: message as string
            }
        } else {
            return {
                statusCode: status,
                message: "An unexpected error has occurred"
            }
        }
    } else {
        return {
            statusCode: 500,
            message: error.message || "An unexpected error has occurred"
        }
    }

}