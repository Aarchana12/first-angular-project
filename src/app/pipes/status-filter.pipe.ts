import { Pipe, PipeTransform } from '@angular/core';
import { Project } from '../model/project';

@Pipe({
  name: 'statusFilter'
})
export class StatusFilterPipe implements PipeTransform {
  transform(projects: Project[], selectedStatus: string): Project[] {
    if (!selectedStatus || selectedStatus === 'All') {
      return projects;
    }
    return projects.filter(project => project.status.toLowerCase() === selectedStatus.toLowerCase());
  }
}
