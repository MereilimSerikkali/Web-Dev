import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';

import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css'],
})
export class AlbumsComponent implements OnInit {
  albums: Album[] = [];
  loading = false;
  errorMsg = '';

  constructor(private albumService: AlbumService) {}

  ngOnInit(): void {
    this.fetchAlbums();
  }

  fetchAlbums(): void {
    this.loading = true;
    this.errorMsg = '';

    this.albumService
      .getAlbums()
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data) => (this.albums = data),
        error: () => (this.errorMsg = 'Failed to load albums. Please try again.'),
      });
  }

  deleteAlbum(id: number, event: MouseEvent): void {
    event.stopPropagation(); // don’t trigger navigation on row click

    this.albumService.deleteAlbum(id).subscribe({
      next: () => {
        // JSONPlaceholder simulates delete — update UI locally
        this.albums = this.albums.filter((a) => a.id !== id);
      },
      error: () => alert('Delete failed (network error).'),
    });
  }
}