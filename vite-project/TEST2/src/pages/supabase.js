import {createClienta} from '@supabase/supabase-js'

export const supabase = createClienta(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
);

export const createClient = async (order) => {
    const {data, error} = await supabase
        .from('orders')
        .insert([order]);

    return {data, error};
};

