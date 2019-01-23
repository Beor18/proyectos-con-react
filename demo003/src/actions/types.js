// Estos son los tipos de actions. Cuando el usuario envía el formulario, 
// debemos llamar a estas acciones. Entonces, cuando un usuario crea una publicación, 
// llamaremos a la acción AGREGAR_NOTA. Esta acción luego llama a la función reducer y agrega el valor a la store. 
// Por lo tanto, no podemos modificar directamente la store, necesitamos crear un actions y luego llamar 
// a la función del reductor para alterar el estado del store.

// Igual que borrar, cuando intentamos eliminar cualquier publicación, se activará la acción BORRAR_NOTA.

export const AGREGAR_NOTA = 'AGREGAR_NOTA';
export const BORRAR_NOTA = 'BORRAR_NOTA';