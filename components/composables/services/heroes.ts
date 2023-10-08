import {useAsyncData} from "#app";

export const useHeroes = async () => {
    const { find } = useStrapi()
    const {
        data,
        pending
    } = await useAsyncData(() => find<any[]>('heroes?populate=*'))

    return { data, pending }
}
