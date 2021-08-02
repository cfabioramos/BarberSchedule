
export default {

    getImageDataFromLocal: ( imageUri ) => {
        const filename = imageUri.split('/').pop()
        // Infer the type of the image
        const match = /\.(\w+)$/.exec(filename)
        const type = match ? `image/${match[1]}` : `image`
        return {filename, type}
    }

};

export const TOKEN_KEY = "cfbarber_token";

export const GET_ERROR_MESSAGE = (error) => {
    const errorMsg = error.message
    if (errorMsg === 'Network request failed') {
        return 'Verifique a conexão com a internet'
    }
    return error.message
}