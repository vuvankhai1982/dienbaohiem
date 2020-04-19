<?php
namespace Deployer;

require 'recipe/laravel.php';

// Project name
set('application', 'dienbaohiem');

// Project repository
set('repository', 'git@github.com:vuvankhai1982/dienbaohiem.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

// Shared files/dirs between deploys
add('shared_files', []);
add('shared_dirs', []);

// Writable dirs by web server
add('writable_dirs', []);


// Hosts

host('52.76.145.70')
    ->user('ubuntu')
    ->set('branch', 'master')
    ->identityFile('../khienpham1223.pem')
    ->set('deploy_path', '~/{{application}}');

// Tasks

task('build', function () {
    run('cd {{release_path}} && build');
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.

before('deploy:symlink', 'artisan:migrate');

