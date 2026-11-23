import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://ghxndtnwvdkojyubnlys.supabase.co";
const supabaseKey = "sb_publishable_OKdTqzEYT703-RuX_txJ5A_z6ahgzTd";

//Creamos la conexion con supabase

export const supabase = createClient(supabaseUrl, supabaseKey);