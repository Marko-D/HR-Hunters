﻿// <auto-generated />
using System;
using HRHunters.Data.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace HRHunters.Data.Migrations
{
    [DbContext(typeof(DataContext))]
    partial class DataContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("HRHunters.Common.Entities.Admin", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Admins");
                });

            modelBuilder.Entity("HRHunters.Common.Entities.Applicant", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<int>("EducationType");

                    b.Property<string>("Experience");

                    b.Property<string>("Logo");

                    b.Property<string>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<string>("PhoneNumber");

                    b.Property<string>("SchoolUniversity");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Applicants");
                });

            modelBuilder.Entity("HRHunters.Common.Entities.Application", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ApplicantId");

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<DateTime>("Date");

                    b.Property<int>("JobPostingId");

                    b.Property<string>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<int>("Status");

                    b.HasKey("Id");

                    b.HasIndex("ApplicantId");

                    b.HasIndex("JobPostingId");

                    b.ToTable("Applications");
                });

            modelBuilder.Entity("HRHunters.Common.Entities.Client", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Location");

                    b.Property<string>("Logo");

                    b.Property<string>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<string>("PhoneNumber");

                    b.Property<int>("Status");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Clients");
                });

            modelBuilder.Entity("HRHunters.Common.Entities.JobPosting", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("ClientId");

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<DateTime>("DateFrom");

                    b.Property<DateTime>("DateTo");

                    b.Property<string>("Description")
                        .HasMaxLength(800);

                    b.Property<int>("Education");

                    b.Property<int>("EmpCategory");

                    b.Property<string>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<string>("NeededExperience")
                        .IsRequired();

                    b.Property<int>("Status");

                    b.Property<string>("Title")
                        .IsRequired();

                    b.HasKey("Id");

                    b.HasIndex("ClientId");

                    b.ToTable("JobPostings");
                });

            modelBuilder.Entity("HRHunters.Common.Entities.Role", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<string>("Name")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedName")
                        .IsUnique()
                        .HasName("RoleNameIndex");

                    b.ToTable("AspNetRoles");
                });

            modelBuilder.Entity("HRHunters.Common.Entities.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<int>("AccessFailedCount");

                    b.Property<string>("ConcurrencyStamp")
                        .IsConcurrencyToken();

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<string>("Email")
                        .HasMaxLength(256);

                    b.Property<bool>("EmailConfirmed");

                    b.Property<string>("FirstName");

                    b.Property<string>("LastName");

                    b.Property<bool>("LockoutEnabled");

                    b.Property<DateTimeOffset?>("LockoutEnd");

                    b.Property<string>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.Property<string>("NormalizedEmail")
                        .HasMaxLength(256);

                    b.Property<string>("NormalizedUserName")
                        .HasMaxLength(256);

                    b.Property<string>("PasswordHash");

                    b.Property<string>("PhoneNumber");

                    b.Property<bool>("PhoneNumberConfirmed");

                    b.Property<string>("SecurityStamp");

                    b.Property<bool>("TwoFactorEnabled");

                    b.Property<string>("UserName")
                        .HasMaxLength(256);

                    b.HasKey("Id");

                    b.HasIndex("NormalizedEmail")
                        .HasName("EmailIndex");

                    b.HasIndex("NormalizedUserName")
                        .IsUnique()
                        .HasName("UserNameIndex");

                    b.ToTable("AspNetUsers");
                });

            modelBuilder.Entity("HRHunters.Common.Entities.UserRole", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<int>("RoleId");

                    b.Property<string>("CreatedBy");

                    b.Property<DateTime>("CreatedDate");

                    b.Property<int>("Id");

                    b.Property<string>("ModifiedBy");

                    b.Property<DateTime?>("ModifiedDate");

                    b.HasKey("UserId", "RoleId");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetUserRoles");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("RoleId");

                    b.HasKey("Id");

                    b.HasIndex("RoleId");

                    b.ToTable("AspNetRoleClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("ClaimType");

                    b.Property<string>("ClaimValue");

                    b.Property<int>("UserId");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserClaims");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.Property<string>("LoginProvider");

                    b.Property<string>("ProviderKey");

                    b.Property<string>("ProviderDisplayName");

                    b.Property<int>("UserId");

                    b.HasKey("LoginProvider", "ProviderKey");

                    b.HasIndex("UserId");

                    b.ToTable("AspNetUserLogins");
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.Property<int>("UserId");

                    b.Property<string>("LoginProvider");

                    b.Property<string>("Name");

                    b.Property<string>("Value");

                    b.HasKey("UserId", "LoginProvider", "Name");

                    b.ToTable("AspNetUserTokens");
                });

            modelBuilder.Entity("HRHunters.Common.Entities.Admin", b =>
                {
                    b.HasOne("HRHunters.Common.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("HRHunters.Common.Entities.Applicant", b =>
                {
                    b.HasOne("HRHunters.Common.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("HRHunters.Common.Entities.Application", b =>
                {
                    b.HasOne("HRHunters.Common.Entities.Applicant", "Applicant")
                        .WithMany("Applications")
                        .HasForeignKey("ApplicantId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("HRHunters.Common.Entities.JobPosting", "JobPosting")
                        .WithMany("Applications")
                        .HasForeignKey("JobPostingId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("HRHunters.Common.Entities.Client", b =>
                {
                    b.HasOne("HRHunters.Common.Entities.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("HRHunters.Common.Entities.JobPosting", b =>
                {
                    b.HasOne("HRHunters.Common.Entities.Client", "Client")
                        .WithMany("JobPostings")
                        .HasForeignKey("ClientId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("HRHunters.Common.Entities.UserRole", b =>
                {
                    b.HasOne("HRHunters.Common.Entities.Role", "Role")
                        .WithMany("UserRoles")
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("HRHunters.Common.Entities.User", "User")
                        .WithMany("UserRoles")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityRoleClaim<int>", b =>
                {
                    b.HasOne("HRHunters.Common.Entities.Role")
                        .WithMany()
                        .HasForeignKey("RoleId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserClaim<int>", b =>
                {
                    b.HasOne("HRHunters.Common.Entities.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserLogin<int>", b =>
                {
                    b.HasOne("HRHunters.Common.Entities.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("Microsoft.AspNetCore.Identity.IdentityUserToken<int>", b =>
                {
                    b.HasOne("HRHunters.Common.Entities.User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade);
                });
#pragma warning restore 612, 618
        }
    }
}
