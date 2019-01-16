let URL = {
    api: '',
    account: ''
}

if(process.env.NODE_ENV === 'development'){
    URL.api = process.env.REACT_APP_URL_DEVELOPMENT_API
    URL.account = process.env.REACT_APP_URL_DEVELOPMENT_ACCOUNT
}else if(process.env.NODE_ENV === 'production'){
    URL.api = process.env.REACT_APP_URL_PRODUCTION_API
    URL.account = process.env.REACT_APP_URL_PRODUCTION_ACCOUNT
}

export default {
    URL
}