

import Navbar from "../../components/Navbar";
import CardCharacter from "../../components/CardCharacter";
import { obtenerFavoritos } from "../actions/favoritos";

export const instant = false;


export default async function Page() {

    // Obtener favoritos guardados en Supabase
    const resultado = await obtenerFavoritos();

    const favoritos = resultado.success
        ? resultado.data
        : [];

    return (
        <div className="flex min-h-screen flex-col items-center bg-zinc-50 font-sans dark:bg-black">

            <Navbar />

            <main className="w-full max-w-6xl px-6 pt-20 pb-16">

                <h1 className="mb-8 mt-10 text-center text-3xl font-bold text-zinc-800 dark:text-white">
                    Mis Personajes Favoritos
                </h1>

                {!resultado.success && (
                    <p className="text-center text-red-500">
                        No se pudieron cargar los favoritos.
                    </p>
                )}

                {favoritos.length > 0 ? (

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

                        {favoritos.map((pj) => (

                            <CardCharacter
                                key={pj.id}
                                id={pj.character_id}
                                nombre={pj.name}
                                imagen={pj.image}
                                estado={pj.status}
                                esFavorito={true}
                            />

                        ))}

                    </div>

                ) : (

                    resultado.success && (
                        <p className="text-center text-zinc-500 dark:text-zinc-400">
                            Aún no tienes personajes favoritos guardados.
                        </p>
                    )

                )}

            </main>

        </div>
    );
}
