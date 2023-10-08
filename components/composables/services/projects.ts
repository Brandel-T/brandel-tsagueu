import {useAsyncData} from "#app";


export const useProjects = async <T>() => {
    const { find } = useStrapi()
    const {
        data,
        pending,
    } = await useAsyncData(() => find<T>('projects?populate=*'))

    return { data, pending }
}