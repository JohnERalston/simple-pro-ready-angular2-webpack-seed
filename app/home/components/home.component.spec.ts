/// <reference path="../../../typings/globals/jasmine/index.d.ts" />

import { ComponentFixture, TestBed } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";

import { HomeComponent } from "./home.component";

let comp: HomeComponent;
let fixture: ComponentFixture<HomeComponent>;

describe("HomeComponent", () => {
     beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            providers: [],
            schemas: [NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HomeComponent);
        comp = fixture.componentInstance;
    });

    /*it("getTestString returns 'Test me please' but will fail", () => {
        expect(comp.getTestString()).toBe("Test me please WRONG");
    });*/

    it("getTestString returns 'Test me please'", () => {
        expect(comp.getTestString()).toBe("Test me please");
    });
});
