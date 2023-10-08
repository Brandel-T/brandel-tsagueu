import {useAsyncData} from "#app";


export const useInterests = async () => {
const { find } = useStrapi()
    const {
        data,
        pending,
    } = await useAsyncData(() => find<any[]>('interests'))

    return { data, pending }
}