import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';

import { AlbumService } from '../services/album.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrls: ['./album-photos.component.css'],
})
export class AlbumPhotosComponent implements OnInit {
  albumId!: number;
  photos: Photo[] = [];

  loading = false;
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchPhotos();
  }

  fetchPhotos(): void {
    this.loading = true;
    this.errorMsg = '';

    this.albumService
      .getAlbumPhotos(this.albumId)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data) => (this.photos = data),
        error: () => (this.errorMsg = 'Failed to load photos.'),
      });
  }

  goBack(): void {
    this.router.navigate(['/albums', this.albumId]);
  }
}