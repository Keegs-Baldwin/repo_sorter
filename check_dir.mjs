import os from 'node:os';
import path from 'node:path';

export function check_dir(inputDir) {
    const normal_dir = path.resolve(inputDir);
    const criticalSystemDirs = [
        '/',
        '/root',
        '/etc',
        '/usr',
        '/var',
        '/bin',
        '/sbin',
        '/boot',
        '/dev',
        '/proc',
        '/sys',
        '/run',
        '/tmp',
        '/opt',
        '/srv',
        '/mnt',
        '/media'
      ];

    const riskyUserDirs = [
        '/home',
        os.homedir(), // Current user's home directory
        path.join(os.homedir(), 'Desktop'),
        path.join(os.homedir(), 'Documents'),
        path.join(os.homedir(), 'Downloads'),
        path.join(os.homedir(), 'Pictures'),
        path.join(os.homedir(), 'Music'),
        path.join(os.homedir(), 'Videos')
    ];

    const badDirs = [...criticalSystemDirs, ...riskyUserDirs];

    for (const badDir of badDirs) {
        if (path.resolve(badDir) === normal_dir) {
            return {
                safe: false,
                reason: "dangerous directory",
                directory: badDir
            };
        }
    }

    const split_dir = normal_dir.split("/").filter(Boolean);
    if (split_dir.length < 2) {
        return {
            safe: false,
            reason: "too close to root",
            directory: "directory distance from root " + split_dir.length
        };
    }

    const dirName = path.basename(normal_dir);

    const packageManagerDirs = [
        'node_modules',
        '.npm',
        '.yarn',
        'bower_components'
    ];
    if (packageManagerDirs.includes(dirName)) {
        return {
          safe: false,
          reason: 'package_manager_dir',
          directory: normal_dir,
        };
    }

    const vcsDirs = ['.git', '.svn', '.hg', '.bzr'];
    if (vcsDirs.includes(dirName)) {
      return {
        safe: false,
        reason: 'version_control_dir',
        directory: normal_dir
      };
    }

    return {
        safe: true,
        directory: normal_dir,
    };
}
