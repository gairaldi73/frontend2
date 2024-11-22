export class Usuario {
    public constructor(init?: Partial<Usuario>){
        Object.assign(this, init);
    }
    id: number = 0;
    nombre: string | null='';
    apellido: string | null = '';
    direccion: Partial<{
        calle: string | null;
        altura: string | null;
    }> | undefined | null;
    }

