using Ax6.ComponentCapture;
using Ax6.Domain;
using Ax6.Domain.Context;
using Ax6.ViewModels;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Threading.Tasks;

namespace Ax6.Controllers
{
    [Route("api/[controller]")]
    public class SubmissionController : Controller
    {
        private Ax6Context _context;

        public SubmissionController(Ax6Context context)
        {
            _context = context;
        }

        [Route("list")]
        public async Task<IActionResult> List()
        {
            var submissions = _context.Submissions.Select(s => new
            {
                Creator = new UserViewModel
                {
                    Username = s.Creator.Username
                },
                s.Description,
                s.FolderGuid,
                s.Title,
            }).ToList();
            return Ok(submissions);
        }

        [Route("{guid}")]
        public async Task<IActionResult> GetByGuid(Guid guid)
        {
            var submission = _context.Submissions
                .Where(s => s.FolderGuid.Equals(guid))
                .Select(s => new
                {
                    Creator = new UserViewModel
                    {
                        Username = s.Creator.Username
                    },
                    s.Description,
                    s.FolderGuid,
                    s.Title,
                    s.Id
                })
                .FirstOrDefault();

            return Ok(submission);
        }



        [HttpPost]
        [Route("component")]
        public async Task<IActionResult> Upload(List<IFormFile> component_zipfile, string component_title, string component_description)
        {
            var submission = new Submission()
            {
                FolderGuid = Guid.NewGuid(),
                Timestamp = DateTime.Now,
                Description = component_description,
                Title = component_title,
                CreatorId = 1
            };

            _context.Submissions.Add(submission);
            _context.SaveChanges();



            if (component_zipfile.Count == 0)
            {
                return new StatusCodeResult(400);

            }

            IFormFile file = component_zipfile[0];

            long size = file.Length;

            var filePath = Path.GetTempFileName();

            //ZipFile.Extract

            string directory = $"submissions/{submission.FolderGuid}/";
            string compressedPath = $"{directory}/compressed.zip";
            string destinationPath = $"{directory}/src/";

            if (size > 0)
            {


                if (!Directory.Exists(directory))
                {
                    System.IO.Directory.CreateDirectory(destinationPath);
                }


                using (var stream = System.IO.File.Create(compressedPath))
                {
                    await file.CopyToAsync(stream);
                }



                ZipFile.ExtractToDirectory(compressedPath, destinationPath);
            }

            /*
             * After unpack, screenshot this site
             */

            Capture capture = new Capture($"https://localhost:44306/submissions/{submission.FolderGuid}/src/index.html", $"{directory}/thumbnail.png");



            return Ok(new { file.FileName, size, submission.FolderGuid });
        }



    }
}
