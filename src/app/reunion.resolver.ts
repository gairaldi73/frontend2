import { ResolveFn } from "@angular/router";
import { Reunion } from "./reunion";
import { ReunionService } from "./reunion.service";
import { of } from "rxjs";
import { inject } from "@angular/core";

export const reunionResolver: ResolveFn<Reunion> = (
    route,
    state,
    service = inject(ReunionService)
) =>{
    const reunion = service.getReunion(route.paramMap.get('id'));
    if (reunion){
        return reunion;
    }
    return of();

};

