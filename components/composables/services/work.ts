import {useLazyAsyncData} from "#app";

export const useWorkExperience = async <T>() => {
    const { find } = useStrapi()
    const {
        data,
        pending,
    } = await useLazyAsyncData(() => find<T[]>('work?populate=*'))

    return { data, pending }
}