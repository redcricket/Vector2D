export class Vector2D {
    private _x: number;
    private _y: number;

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    getXY(): [number, number] {
        return [this._x, this._y];
    }

    static plus(u: Vector2D, v: Vector2D): Vector2D {
        return new Vector2D(u.x + v.x, u.y + v.y);
    }

    static minus(u: Vector2D, v: Vector2D): Vector2D {
        return new Vector2D(u.x - v.x, u.y - v.y);
    }

    static mult(v: Vector2D, c: number): Vector2D {
        return new Vector2D(c * v.x, c * v.y);
    }

    incr(v: Vector2D): Vector2D {
        this._x += v.x;
        this._y += v.y;
        return this;
    }

    decr(v: Vector2D): Vector2D {
        this._x -= v.x;
        this._y -= v.y;
        return this;
    }

    scale(c: number): Vector2D {
        this._x *= c;
        this._y *= c;
        return this;
    }

    rotate(C: Vector2D, cosphi: number, sinphi: number): Vector2D {
        const dx = this._x - C.x;
        const dy = this._y - C.y;
        return new Vector2D(
            C.x + dx * cosphi - dy * sinphi,
            C.y + dx * sinphi + dy * cosphi
        );
    }

    print(): void {
        console.log(`( ${this._x}, ${this._y} )`);
    }
}
