
"use server";

import { supabase } from "../repositories/supabase";
import { Character } from "../types";

export async function guardarFavorito(character: Character) {
    const { error } = await supabase.from("Favoritos").insert({
        character_id: character.id,
        name: character.name,
        image: character.image,
        status: character.status,
    });

    if (error) {
        console.error("Error al guardar favorito:", error.message);
        return {
            success: false,
            error: error.message,
        };
    }

    return { success: true };
}

export async function obtenerFavoritos() {
    const { data, error } = await supabase
        .from("Favoritos")
        .select("*");

    if (error) {
        console.error("Error al obtener favoritos:", error.message);

        return {
            success: false,
            error: error.message,
            data: [],
        };
    }

    return {
        success: true,
        data: data ?? [],
    };
}

export async function eliminarFavorito(id: number) {
    const { error } = await supabase
        .from("Favoritos")
        .delete()
        .eq("character_id", id);

    if (error) {
        console.error("Error al eliminar favorito:", error.message);

        return {
            success: false,
            error: error.message,
        };
    }

    return { success: true };
}
