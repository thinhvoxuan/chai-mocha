/**
 * Created by thinhvoxuan on 1/3/16.
 */
import {expect }  from 'chai' ;
import starWar  from '../src/index';

describe('starwars-names', function(){
   it('show work!', function(){
       expect(true).to.be.true;
   })
   it('show be array', function(){
       expect(starWar.all).to.satisfy(isArrayOfString);

       function isArrayOfString(array){
           return array.every(function(item){
               return typeof item === 'string';
           });
       }
   })
    it('should contain thinh voxuan', function(){
        expect(starWar.all).to.include('dai tran');
    })

});