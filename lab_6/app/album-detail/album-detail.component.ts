import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';

import { AlbumService } from '../services/album.service';
import { Album } from '../models/album.model';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrls: ['./album-detail.component.css'],
})
export class AlbumDetailComponent implements OnInit {
  albumId!: number;

  album: Album | null = null;
  titleDraft = '';

  loading = false;
  saving = false;
  errorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private albumService: AlbumService
  ) {}

  ngOnInit(): void {
    this.albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchAlbum();
  }

  fetchAlbum(): void {
    this.loading = true;
    this.errorMsg = '';

    this.albumService
      .getAlbum(this.albumId)
      .pipe(finalize(() => (this.loading = false)))
      .subscribe({
        next: (data) => {
          this.album = data;
          this.titleDraft = data.title;
        },
        error: () => (this.errorMsg = 'Failed to load album details.'),
      });
  }

  save(): void {
    if (!this.album) return;

    const updated: Album = { ...this.album, title: this.titleDraft.trim() };

    this.saving = true;
    this.albumService
      .updateAlbum(updated)
      .pipe(finalize(() => (this.saving = false)))
      .subscribe({
        next: (resp) => {
          // JSONPlaceholder returns updated object; update UI locally
          this.album = resp;
          this.titleDraft = resp.title;
        },
        error: () => alert('Save failed (network error).'),
      });
  }

  goBack(): void {
    this.router.navigate(['/albums']);
  }
}