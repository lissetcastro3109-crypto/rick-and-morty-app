"use client";

import { useState } from "react";
import {
    guardarFavorito,
    eliminarFavorito,
} from "../app/actions/favoritos";

interface CardCharacterProps {
    id: number;
    nombre: string;
    imagen: string;
    estado: string;
    esFavorito: boolean;
}

export default function CardCharacter({
    id,
    nombre,
    imagen,
    estado,
    esFavorito,
}: CardCharacterProps) {
    const [favorito, setFavorito] = useState(esFavorito);
    const [cargando, setCargando] = useState(false);

    async function manejarFavorito() {
        setCargando(true);

        try {
            const character = {
                id,
                name: nombre,
                image: imagen,
                status: estado,
            };

            const resultado = favorito
                ? await eliminarFavorito(id)
                : await guardarFavorito(character);

            if (!resultado.success) {
                console.error("Error devuelto por Supabase:", resultado.error);

                throw new Error(
                    resultado.error || "No se pudo actualizar el favorito"
                );
            }

            setFavorito(!favorito);
        } catch (error) {
            console.error("Error al actualizar favorito:", error);
            alert("No se pudo actualizar el favorito. Revisa la consola.");
        } finally {
            setCargando(false);
        }
    }

    return (
        <article className="overflow-hidden rounded-xl border border-gray-700 bg-gray-900 text-white shadow-lg">
            <img
                src={imagen}
                alt={nombre}
                className="h-64 w-full object-cover"
            />

            <div className="p-4">
                <h2 className="text-xl font-bold">{nombre}</h2>

                <p className="mt-2 text-sm text-gray-300">
                    Estado: {estado}
                </p>

                <button
                    type="button"
                    onClick={manejarFavorito}
                    disabled={cargando}
                    aria-pressed={favorito}
                    className="mt-4 w-full rounded-lg bg-green-600 px-4 py-2 font-semibold hover:bg-green-700 disabled:opacity-50"
                >
                    {cargando
                        ? "Guardando..."
                        : favorito
                            ? "★ Quitar de favoritos"
                            : "☆ Agregar a favoritos"}
                </button>
            </div>
        </article>
    );
}