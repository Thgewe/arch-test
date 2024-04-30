const debounce = (callback: Function, ms: number = 100) => {

    let isReady: boolean = true;

    return (...args: any[]) => {
        if (isReady) {
            isReady = false;
            callback(...args);

            setTimeout(() => {
                isReady = true;
            }, ms);
        }
    }
};

export default debounce;