declare module objects{
   
    export class Button{
        /**
         * Creates an instance of Button.
         * @param {string} [source=""]
         * @param {number} [width=0]
         * @param {number} [height=0]
         */
        constructor(source:string = "", width:number = 0, height:number = 0)
        
    }

    export class Vector {
        /**
         * Creates an instance of Vector.
         * @param {number} [_x=0]
         * @param {number} [_y=0]
         */
        constructor(_x:number = 0, _y:number = 0);

        /**
         *
         *
         * @return {*}  {string}
         */
        public toString():string;
    }
}