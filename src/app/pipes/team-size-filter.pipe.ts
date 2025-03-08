import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../model/project';

@Pipe({
  name: 'teamSizeFilter'
})
export class TeamSizeFilterPipe implements PipeTransform {
  transform(projects: Project[], minSize: number, maxSize: number): Project[] {
    return projects.filter(project => project.teamSize >= minSize && project.teamSize <= maxSize);
  }
}
