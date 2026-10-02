import Generators from './Generators';
import ExtraGenerators from './ExtraGenerators';

export default function GeneratorRouter({type}:{type:string}){
 return ['color','shadow','grid'].includes(type)?<ExtraGenerators type={type}/>:<Generators type={type}/>;
}
